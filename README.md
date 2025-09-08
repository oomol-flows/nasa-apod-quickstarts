# NASA APOD Workflows

This project demonstrates how to create visual workflows using OOMOL blocks to fetch and process NASA's Astronomy Picture of the Day (APOD). These workflows are designed to be user-friendly and accessible to non-developers.

## What This Project Does

This collection contains three example workflows that show different ways to work with NASA's daily astronomy images and information:

### 🌟 Flow 1: Simple Translation Workflow

**What it does:** Fetches today's astronomy picture from NASA and translates the description into different languages.

**How it works:**
1. **Fetch Block** 📡 - Connects to NASA's API and gets today's astronomy picture with its English description
2. **Chinese Translation Block** 🇨🇳 - Uses AI (GPT-4) to translate the description into Chinese
3. **Japanese Translation Block** 🇯🇵 - Uses AI (Kimi) to translate the description into Japanese  
4. **Preview Blocks** 👁️ - Shows the translated text in a readable format

**Perfect for:** Anyone who wants to enjoy NASA's daily astronomy content in multiple languages.

### 💾 Flow 2: Image Download and Save Workflow

**What it does:** Downloads NASA's astronomy picture and saves it to your computer with compression.

**How it works:**
1. **Fetch Block** 📡 - Gets today's astronomy picture and its download link from NASA
2. **URL to File Block** 🔗 - Downloads the actual image file from the NASA server
3. **Save Block** 💾 - Compresses and saves the image to your specified folder (`/oomol-driver/oomol-storage/apod`)

**Perfect for:** Building a personal collection of NASA's astronomy pictures on your device.

### 🔐 Flow 3: Secret API Key Workflow  

**What it does:** Shows how to securely use your own NASA API key for unlimited access.

**How it works:**
1. **Fetch Block with Secret** 🔑 - Uses your personal NASA API key (stored securely) to fetch astronomy data
2. **Preview Block** 👁️ - Displays the astronomy information in an easy-to-read format

**Perfect for:** Users who want to use their own NASA API key for better rate limits and reliability.

## Key Features

### 🧩 **Modular Blocks**
Each workflow is built with reusable blocks that can be easily connected and modified:
- **Fetch blocks** - Connect to external data sources
- **AI translation blocks** - Translate content using different AI models
- **File handling blocks** - Download and save files
- **Preview blocks** - Display content in user-friendly formats

### 🔄 **Visual Workflow Design**
- Drag-and-drop interface for building workflows
- Clear connections between blocks showing data flow
- No coding required - everything is visual

### 🛡️ **Secure Credential Management**
- API keys and secrets are stored securely
- No sensitive information exposed in the workflow
- Easy credential management through the OOMOL interface

### 🌐 **Multi-language AI Support**
- Supports multiple AI models (GPT-4, Kimi, etc.)
- Easy language translation capabilities
- Customizable AI parameters (temperature, tokens, etc.)

## How to Use These Workflows

### For Beginners:
1. **Start with Flow 1 (Simple)** - This gives you a taste of NASA's content in multiple languages
2. **Try Flow 2 (Compression and Save)** - This lets you build your own NASA image collection
3. **Advance to Flow 3 (Secret)** - Use your own API key for unlimited access

### For Customization:
- **Change languages:** Modify the translation blocks to translate into your preferred languages
- **Adjust AI models:** Switch between different AI providers based on your needs
- **Modify save locations:** Change where images are saved on your system
- **Add more blocks:** Extend workflows with additional processing steps

## What You'll Get

### 🖼️ **Daily Astronomy Images**
High-quality images from NASA's astronomy picture of the day, including:
- Stunning space photography
- Astronomical diagrams and illustrations
- Historical astronomy images
- Educational content about space

### 📝 **Detailed Descriptions** 
Rich, informative descriptions in multiple languages explaining:
- What the image shows
- Scientific significance
- Discovery context
- Educational insights

### 🗂️ **Organized Collection**
When using the save workflow, you'll build a personal library of:
- Compressed, optimized images
- Organized file structure
- Easy access to your favorite astronomy content

## Technical Requirements

- OOMOL platform installed
- Internet connection for NASA API access
- Optional: Personal NASA API key for enhanced access

## Getting Started

1. Open OOMOL platform
2. Load any of the three workflows
3. Click "Run" to execute the workflow
4. View results in the preview panels
5. Customize blocks as needed for your preferences

## Why Use These Workflows?

- **Educational:** Learn about space and astronomy daily
- **Multi-cultural:** Enjoy content in different languages
- **Personal Collection:** Build your own astronomy image library
- **No Coding:** Visual interface requires no programming knowledge
- **Expandable:** Easy to modify and extend with new features

Perfect for educators, space enthusiasts, students, or anyone curious about the universe!