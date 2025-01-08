const menus = [
    {
      label: "Getting Started",
      to: "/",
      icon: "fas fa-rocket", // Rocket icon for getting started
    },
    {
      label: "Basics",
      to: "/basics",
      icon: "fas fa-book", // Book icon for basics
      children: [
        {
          label: "Syntax",
          to: "syntax",
          icon: "fas fa-code", // Code icon for syntax
          children: [
            {
              label: "Hello World",
              to: "hello-world",
              icon: "fas fa-globe", // Globe icon for Hello World
            },
            {
              label: "Variables",
              to: "variables",
              icon: "fas fa-tag", // Tag icon for variables
            },
            {
              label: "Data Types",
              to: "data-types",
              icon: "fas fa-database", // Database icon for data types
            },
          ],
        },
        {
          label: "Control Flow",
          to: "control-flow",
          icon: "fas fa-project-diagram", // Diagram icon for control flow
          children: [
            {
              label: "If Statements",
              to: "if-statements",
              icon: "fas fa-question", // Question icon for if statements
            },
            {
              label: "Loops",
              to: "loops",
              icon: "fas fa-sync", // Sync icon for loops
              children: [
                {
                  label: "For Loop",
                  to: "for-loop",
                  icon: "fas fa-redo", // Redo icon for for loop
                },
                {
                  label: "While Loop",
                  to: "while-loop",
                  icon: "fas fa-infinity", // Infinity icon for while loop
                },
                {
                  label: "Do-While Loop",
                  to: "do-while-loop",
                  icon: "fas fa-undo", // Undo icon for do-while loop
                },
              ],
            },
            {
              label: "Switch Case",
              to: "switch-case",
              icon: "fas fa-random", // Random icon for switch case
            },
          ],
        },
        {
          label: "Functions",
          to: "functions",
          icon: "fas fa-cogs", // Cogs icon for functions
          children: [
            {
              label: "Declaration",
              to: "declaration",
              icon: "fas fa-file-alt", // File icon for declaration
            },
            {
              label: "Parameters",
              to: "parameters",
              icon: "fas fa-sliders-h", // Sliders icon for parameters
            },
            {
              label: "Recursion",
              to: "recursion",
              icon: "fas fa-recycle", // Recycle icon for recursion
            },
          ],
        },
      ],
    },
    {
      label: "Intermediate",
      to: "/intermediate",
      icon: "fas fa-layer-group", // Layer group icon for intermediate
      children: [
        {
          label: "Object-Oriented Programming",
          to: "oop",
          icon: "fas fa-shapes", // Shapes icon for OOP
          children: [
            {
              label: "Classes and Objects",
              to: "classes-objects",
              icon: "fas fa-cube", // Cube icon for classes and objects
            },
            {
              label: "Inheritance",
              to: "inheritance",
              icon: "fas fa-sitemap", // Sitemap icon for inheritance
            },
            {
              label: "Polymorphism",
              to: "polymorphism",
              icon: "fas fa-random", // Random icon for polymorphism
            },
            {
              label: "Encapsulation",
              to: "encapsulation",
              icon: "fas fa-box", // Box icon for encapsulation
            },
          ],
        },
        {
          label: "STL (Standard Template Library)",
          to: "stl",
          icon: "fas fa-toolbox", // Toolbox icon for STL
          children: [
            {
              label: "Vectors",
              to: "vectors",
              icon: "fas fa-vector-square", // Vector square icon for vectors
            },
            {
              label: "Maps",
              to: "maps",
              icon: "fas fa-map", // Map icon for maps
            },
            {
              label: "Sets",
              to: "sets",
              icon: "fas fa-th-large", // Grid icon for sets
            },
            {
              label: "Algorithms",
              to: "algorithms",
              icon: "fas fa-sort-amount-down", // Sort icon for algorithms
            },
          ],
        },
        {
          label: "Memory Management",
          to: "memory-management",
          icon: "fas fa-memory", // Memory icon for memory management
          children: [
            {
              label: "Pointers",
              to: "pointers",
              icon: "fas fa-bullseye", // Bullseye icon for pointers
            },
            {
              label: "Dynamic Memory",
              to: "dynamic-memory",
              icon: "fas fa-bolt", // Bolt icon for dynamic memory
            },
            {
              label: "Smart Pointers",
              to: "smart-pointers",
              icon: "fas fa-brain", // Brain icon for smart pointers
            },
          ],
        },
      ],
    },
    {
      label: "Advanced",
      to: "/advanced",
      icon: "fas fa-microchip", // Microchip icon for advanced
      children: [
        {
          label: "Templates",
          to: "templates",
          icon: "fas fa-copy", // Copy icon for templates
          children: [
            {
              label: "Function Templates",
              to: "function-templates",
              icon: "fas fa-code-branch", // Code branch icon for function templates
            },
            {
              label: "Class Templates",
              to: "class-templates",
              icon: "fas fa-cubes", // Cubes icon for class templates
            },
          ],
        },
        {
          label: "Concurrency",
          to: "concurrency",
          icon: "fas fa-tasks", // Tasks icon for concurrency
          children: [
            {
              label: "Threads",
              to: "threads",
              icon: "fas fa-stream", // Stream icon for threads
            },
            {
              label: "Mutex",
              to: "mutex",
              icon: "fas fa-lock", // Lock icon for mutex
            },
            {
              label: "Async",
              to: "async",
              icon: "fas fa-bolt", // Bolt icon for async
            },
          ],
        },
        {
          label: "Optimization",
          to: "optimization",
          icon: "fas fa-tachometer-alt", // Tachometer icon for optimization
          children: [
            {
              label: "Inline Functions",
              to: "inline-functions",
              icon: "fas fa-bolt", // Bolt icon for inline functions
            },
            {
              label: "Move Semantics",
              to: "move-semantics",
              icon: "fas fa-arrows-alt", // Arrows icon for move semantics
            },
            {
              label: "Compilation Flags",
              to: "compilation-flags",
              icon: "fas fa-flag", // Flag icon for compilation flags
            },
          ],
        },
      ],
    },
    {
      label: "Projects",
      to: "/projects",
      icon: "fas fa-project-diagram", // Project diagram icon for projects
      children: [
        {
          label: "Beginner",
          to: "beginner",
          icon: "fas fa-star", // Star icon for beginner projects
          children: [
            {
              label: "Calculator",
              to: "calculator",
              icon: "fas fa-calculator", // Calculator icon for calculator project
            },
            {
              label: "Tic-Tac-Toe",
              to: "tic-tac-toe",
              icon: "fas fa-times", // Times icon for Tic-Tac-Toe
            },
          ],
        },
        {
          label: "Intermediate",
          to: "intermediate",
          icon: "fas fa-star-half-alt", // Half star icon for intermediate projects
          children: [
            {
              label: "Bank System",
              to: "bank-system",
              icon: "fas fa-university", // University icon for bank system
            },
            {
              label: "Inventory Manager",
              to: "inventory-manager",
              icon: "fas fa-boxes", // Boxes icon for inventory manager
            },
          ],
        },
        {
          label: "Advanced",
          to: "advanced",
          icon: "fas fa-star-and-crescent", // Star and crescent icon for advanced projects
          children: [
            {
              label: "Multi-threaded Server",
              to: "multi-threaded-server",
              icon: "fas fa-server", // Server icon for multi-threaded server
            },
            {
              label: "Game Engine",
              to: "game-engine",
              icon: "fas fa-gamepad", // Gamepad icon for game engine
            },
          ],
        },
      ],
    },
    {
      label: "Resources",
      to: "/resources",
      icon: "fas fa-tools", // Tools icon for resources
      children: [
        {
          label: "Books",
          to: "books",
          icon: "fas fa-book-open", // Open book icon for books
        },
        {
          label: "Online Courses",
          to: "online-courses",
          icon: "fas fa-laptop-code", // Laptop code icon for online courses
        },
        {
          label: "Communities",
          to: "communities",
          icon: "fas fa-users", // Users icon for communities
        },
      ],
    },
  ];
  
  export default menus;