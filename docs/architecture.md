&#x20;Employee Form – Client Server Architecture



```mermaid

flowchart TD

&#x20;   A\[User] --> B\[Browser - Employee Form]

&#x20;   B --> C\[API Request]

&#x20;   C --> D\[Backend Logic]

&#x20;   D --> E\[Database]

&#x20;   E --> D

&#x20;   D --> F\[HTTP Response]

&#x20;   F --> B

&#x20;   B --> G\[Display Result to User]

