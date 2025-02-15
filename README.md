# Linux Commands Practice

This project contains a simple directory structure created using Linux commands to practice file and folder management.

## 📂 Project Structure

projects/ │── week1/ # Contains an empty folder after file deletion │── week2/ # Contains hello_copy.txt (copied file) │── about_me.txt # Contains a short paragraph about learning Node.js

bash
Copy
Edit

## 🛠 Commands Used###


1️⃣ **Creating Folders**
```bash
mkdir projects
cd projects
mkdir week1 week2
2️⃣ Creating and Managing Files
bash
Copy
Edit
touch week1/hello.txt       # Create an empty file
cp week1/hello.txt week2/hello_copy.txt  # Copy file to week2
rm week1/hello.txt          # Delete original file
3️⃣ Editing a File with Vim
bash
Copy
Edit
vim about_me.txt
Press i to enter Insert mode
Write your text
Press Esc, type :wq, and hit Enter to save and exit
4️⃣ Tracking Empty Folders in Git
Git doesn’t track empty folders, so we added a hidden .gitkeep file:

bash
Copy
Edit
touch week1/.gitkeep
git add week1/.gitkeep
5️⃣ Removing a Vim Swap File
bash
Copy
Edit
rm .about_me.txt.swp
