import os

# Define the file structure
file_structure = [
    "assets",
    "components/Auth",
    "components/CodeReview",
    "components/Collaboration",
    "components/Documentation",
    "components/Search/SearchBar.js",
    "components/Header/Header.js",
    "components/Footer/Footer.js",
    "components/Notifications",
    "components/Profile",
    "components/CodeUpload/CodeListings.js",
    "components/CodeUpload/CodeCard.js",
    "pages/Home.js",
    "pages/Login.js",
    "pages/Register.js",
    "pages/Profile.js",
    "pages/CodeDetail.js",
    "App.js",
    "index.js",
    "App.css",
    "theme.js"
]

# Create the file structure
for path in file_structure:
    if "." in path:  # It's a file
        os.makedirs(os.path.dirname(path), exist_ok=True)
        if not os.path.exists(path):
            open(path, 'a').close()
    else:  # It's a directory
        os.makedirs(path, exist_ok=True)

print("File structure created successfully.")
