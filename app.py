from flask import Flask, request, render_template, jsonify, abort, url_for
import pandas as pd
import os
import urllib.parse
from werkzeug.routing import BaseConverter

# Initialize Flask app with explicit static configuration
app = Flask(__name__, static_url_path='/static', static_folder='static')

# Path to dataset
DATASET_PATH = os.getenv('DATASET_PATH', 'cleaned_food_data.csv')

# Load the dataset
data = None
if os.path.exists(DATASET_PATH):
    try:
        data = pd.read_csv(DATASET_PATH)
    except Exception as e:
        print(f"Error loading dataset: {e}")
else:
    print(f"Dataset file '{DATASET_PATH}' not found.")

# Ensure required columns exist
REQUIRED_COLUMNS = ['name', 'calories', 'protein', 'total_fat']
if data is not None and not all(col in data.columns for col in REQUIRED_COLUMNS):
    raise ValueError(f"The dataset must contain these columns: {', '.join(REQUIRED_COLUMNS)}")

@app.before_request
def check_dataset():
    """
    Ensure the dataset is available before any request.
    """
    if data is None and request.endpoint != 'main_home':
        abort(503, description="Dataset is unavailable. Please try again later.")

# Custom URL converter to handle food item names with special characters
class ItemNameConverter(BaseConverter):
    def to_python(self, value):
        return urllib.parse.unquote(value)  # Decode URL-encoded characters

    def to_url(self, value):
        return urllib.parse.quote(value)  # Encode characters when generating URLs

# Register the converter
app.url_map.converters['item'] = ItemNameConverter

@app.route('/')
def main_home():
    """
    Render the main website's home page.
    """
    return render_template('main_index.html')  # Ensure this file exists in the templates folder

@app.route('/foodinfo')
def food_info_home():
    """
    Render the Food Info application's home page.
    """
    return render_template('foodinfo.html')  # Ensure this file exists in the templates folder

@app.route('/donate')
def donate():
    """
    Render the Donate page.
    """
    return render_template('donate/donate.html')  # Render the Donate page template


@app.route('/donate/qr')
def donate_qr():
    """
    Render the QR code donation page.
    """
    return render_template('donate/qr.html')


@app.route('/search', methods=['POST', 'GET'])
def search():
    """
    Search for food items in the dataset.
    - POST: Search via form submission.
    - GET: Fetch results via API calls (e.g., JavaScript fetch).
    """
    query = request.form.get('query', '').strip() if request.method == 'POST' else request.args.get('query', '').strip()

    if not query:
        if request.method == 'POST':
            return render_template('foodinfo.html', results=[], query=query, error="Please provide a search query.")
        return jsonify({'error': 'No query provided.'}), 400

    # Filter results and drop duplicates
    results = data[data['name'].str.contains(query, case=False, na=False)].drop_duplicates(subset=['name'])

    # Pass the full row of data (including nutrition info) to the template
    if request.method == 'POST':
        return render_template('foodinfo.html', results=results.to_dict(orient='records'), query=query)

    # Return JSON for GET
    return jsonify(results.to_dict(orient='records'))

@app.route('/about')
def about():
    return render_template('about/about.html')

@app.route('/details/<item:item_name>')
def item_details(item_name):
    """
    Show detailed information about a specific food item.
    """
    # The item_name is automatically URL-decoded by the converter
    item = data[data['name'].str.lower() == item_name.lower()].to_dict(orient='records')
    
    if item:
        return render_template('result.html', item=item[0])  # Pass the first match
    
    # Handle item not found
    abort(404, description=f"Item '{item_name}' not found.")

if __name__ == "__main__":
    # Run Flask with optional debug mode
    app.run(debug=os.getenv('FLASK_DEBUG', '1') == '1', host='0.0.0.0', port=5000)
