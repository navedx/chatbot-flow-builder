# Chatbot Flow Builder

A visual flow builder for creating chatbot conversation flows using React and ReactFlow.

## Features

- 🎨 **Visual Flow Editor** - Drag and drop interface for building chatbot flows
- 📝 **Message Nodes** - Create text message nodes for your chatbot
- 🔗 **Smart Connections** - Connect nodes with intelligent edge rules
- 🎯 **Node Selection** - Click to select and edit node properties

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd chatbot-flow-builder
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app

## How to Use

1. **Add Nodes**: Drag message nodes from the left panel onto the canvas
2. **Connect Nodes**: Drag from a node's handle to another node to create connections
3. **Edit Messages**: Click on a node to select it, then edit the message in the right panel
4. **Save Flow**: Click "Save Changes" to save your flow

## Flow Rules

- **Single Start Node**: Only one node can have no incoming connections
- **One Outgoing Edge**: Each node can only have one outgoing connection
- **Multiple Incoming Edges**: Nodes can receive multiple incoming connections

## Tech Stack

- **React** - Frontend framework
- **ReactFlow** - Flow diagram library
- **React DnD** - Drag and drop functionality
- **React Hot Toast** - Toast notifications
- **CSS** - Styling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
