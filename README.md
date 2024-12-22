
# Node.js File Creator CLI

A simple CLI application for creating text files interactively. This Node.js script is beginner-friendly and demonstrates the use of the `fs` and `readline` modules.

## Features
- **Interactive File Creation**:
  - Prompts the user for a filename.
  - Collects content to write into the file.
  - Creates a `.txt` file in the current directory.
  
- **Validation**:
  - Ensures the filename is not empty.
  - Warns if a file with the same name already exists and asks for overwrite confirmation.

- **Error Handling**:
  - Handles potential issues during file writing.
  - Provides clear feedback for errors or successful operations.

## Prerequisites
- Install Node.js on your system. [Download Node.js](https://nodejs.org)

## How to Use
1. Clone this repository:
   ```bash
   git clone https://github.com/aditya-tripathee/node-file-creator-cli.git
   cd node-file-creator-cli
