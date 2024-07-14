# Acore Admin Portal 

This project is an admin portal and user-friendly platform designed to manage books, implemented using Angular framework and json-server for a local API. It also integrates Firebase for uploading images and PDFs. The portal is fully responsive, ensuring seamless user experience across different devices.

## Features

1. **Login/Logout**:
   - Admin login with email and password.
   - Validation messages for required fields and invalid email format.
   - Logout functionality with redirection to the login page.
  
2. **search feature**:
     - Search books by title or author name.

3. **Book Management**:
   - List all books with details such as title, category, author, ISBN, and version.
   - Actions: View, Edit, Delete for each book.
   - Pagination for book listing.

4. **Add/Edit Book**:
   - Add new books with details such as title, author, category, price, PDF, cover photo, version, edition, ISBN, release date, and brief.
   - Edit existing book details with auto-populated fields.

5. **View Book**:
   - View all details of a book including image, name, author, release date, price, ISBN, version, category, brief, number of pages, and average reading time.
   - Options to edit or delete the book.

6. **Delete Book**:
   - Delete a book with a confirmation pop-up.

7. **File Upload**:
   - Integration with Firebase to upload images and PDFs for books.

8. **Route Protection**:
   - Guards to protect routes from unauthorized access.

9. **Data Filtering and Transformation**:
   - Use of pipes to filter and transform data.

10. **Custom Validation**:
    - Angular reactive forms validation for custom validation logic.
   
      
## Technologies Used

- **Bootstrap**: For responsive design.
- **FontAwesome**: For icons.
- **Firebase**: For file uploads.
- **json-server**: For local API.


## Getting Started
  **Prerequisites**  
  * angular CLI.
    
**Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/David8-0/TrianglZ-Task-Angular.git
   cd TrianglZ-Task-Angular
2. Install the dependencies:
    ```bash
     npm install
     npm install -g json-server

**Running the Application**
1. Start the development server:
    ```bash
     ng serve -open
     json-server data/data_base.json
2. Open your browser and navigate to http://localhost:4200.

## Usage

1. **Login**:
   - Access the login page and enter valid credentials to access the admin portal.

2. **Manage Books**:
   - Use the navigation to access the list of books.
   - Add new books using the "Add book" button.
   - Edit or view details of existing books using the corresponding actions.
   - Delete books with confirmation.

3. **Search and Pagination**:
   - Use the search bar to find books by name or author.
   - Navigate through paginated lists of books.

4. **Upload Files**:
   - Upload book cover images and PDFs through the add/edit book forms.

## Contributing

We welcome contributions to improve the Student Manager Application. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.


## Contact

For any inquiries, please contact:

- **Name**: David Ayad
- **Email**: [davidayad88@gmail.com](mailto:davidayad88@gmail.com)
- **GitHub**: [David Ayad](https://github.com/David8-0)
