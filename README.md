# Nutrition Explorer

A Python-based web application built with Flask that provides detailed nutritional information about food items.

## Live Demo

Check out the live demo here: [Live Demo](https://nutrition-explorer.vercel.app/)

## Features

- Search for food items to get detailed nutritional information.
- Displays data such as calories, protein, fat, vitamins, and more.
- User-friendly interface with responsive design for all devices.
- Interactive features for a seamless user experience.

## Technologies Used

- **Flask**: A lightweight and efficient web framework for Python.
- **HTML/CSS**: For building a clean and responsive frontend.
- **JavaScript**: For dynamic and interactive components.
- **Vercel**: Serverless deployment for reliable hosting.

## Setup and Installation

### Prerequisites

- Python 3.7 or higher
- Flask library
- A code editor (e.g., VSCode or PyCharm)

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/nutrition-explorer.git
cd nutrition-explorer
```

### 2. Install Dependencies

Install the required Python dependencies:

```bash
pip install -r requirements.txt
```

### 3. Run Locally

Run the application locally with:

```bash
python app.py
```

Visit [http://127.0.0.1:5000/](http://127.0.0.1:5000/) to view the app locally.

### 4. Deploy on Vercel

1. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy your app:

   ```bash
   vercel --prod
   ```

Your app will be live on a Vercel URL.

## Folder Structure

```plaintext
nutrition explorer/
├── app.py                           # Main Flask application file
├── requirements.txt                 # Dependencies for the project
├── config.py                        # Configuration settings (optional)
├── static/                          # Static files
│   ├── donate/                      # Static files for the "donate" section
│   │   ├── style.css                # Combined CSS file for "donate" and other sections
│   │   ├── images/
│   │   │   └── qr_code.png
│   ├── about/                       # Static files for the "About" section
│   │   ├── images/
│   │   │   └── team_photo.jpg       # Example image for the About page
├── templates/                       # HTML templates
│   ├── donate/                      # Templates for the "donate" section
│   │   ├── qr.html
│   │   └── donate.html
│   ├── about/                       # Templates for the "About" section
│   │   └── about.html               # About page template
│   ├── layout.html                  # Base layout for all templates
│   ├── index.html                   # Homepage template
├── instance/
│   └── config.py
├── migrations/                      # Database migration files (if applicable)
├── tests/                           # Unit tests for the project
│   ├── test_app.py
└── README.md                        # Project documentation

```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

## Contributing

Contributions are welcome! Fork the repository, make changes, and submit a pull request. All contributions will be reviewed and appreciated.
