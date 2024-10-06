# Zania Front-end Challenge

## Introduction

This project focused on building a responsive and interactive front-end application using React and TypeScript. As the **primary focus was front-end development**. I opted to skip the backend implementation, as suggested in the [assignment document](https://drive.google.com/file/d/1vusAJi29Ph9QCYvKszmZv-Jyr_rUbuho/view). The project leverages modern front-end technologies and tools, such as TypeScript, which ensures type safety and reduces bugs during development, Material UI for the design system, and React Query for state management and data fetching.

My aim was to ensure maintainability, performance optimization, Modernity of the code, and ease of use for the end user. while also following best practices in React development.

## Approach

- I started by scaffolding the project using Vite.js with the React TypeScript template. This choice provided fast development performance and seamless TypeScript support, as well as some ready to go configurations.

- To achieve data persistence across reloads, I opted for Local Storage. I built a mock REST API using MSW (Mock Service Worker) to simulate backend calls. This approach provided a realistic API interface while ensuring the data is stored locally, as required by the assignment.

- To manage data fetching and synchronization with the mock API, I utilized React Query. It simplified the handling of asynchronous operations, including loading states, caching, and synchronization with the mock REST API while It offered minimal setup.

- For the drag-and-drop functionality, I used React DnD. It provided a flexible and maintainable way to manage item reordering in the UI

- For the UI components, I used Material UI to create a clean, responsive design with minimal effort. Material UI's component library allowed me to quickly build the grid layout and ensure consistent styling across the application.

## Challenges & Solutions

Initially, I considered using throttling to control the frequency of save operations when changes were made to the document order. However, this approach didn’t suit the requirement to save data every 5 seconds consistently. Instead, I opted for an interval-based solution using setInterval to trigger a save operation every 5 seconds. This method ensured that the changes were saved periodically, even if the user was inactive for a while.

Additionally, I implemented a hasChange flag to track modifications, ensuring that data was only saved when necessary. This minimized unnecessary API calls, optimized performance, and improved the user experience.

## Conclusion

This project focused entirely on the front-end, as per the assignment guidelines, using modern React tools and practices. The combination of Material UI, React DnD, and React Query made it possible to build an interactive and responsive interface efficiently. The decision to use an interval-based save mechanism ensured that changes were saved consistently without overwhelming the server with requests. Overall, the project was a valuable experience in applying front-end development best practices while ensuring maintainability and performance.

## How to run it?

To run the project locally, follow these steps:

1. Clone the Repository:

```bash
 git clone https://github.com/minnasho/zania-frontend.git
 cd zania-frontend
```

2. Install Dependencies:

```bash
 yarn install
```

3. Start the Development Server:

```bash
 yarn dev
```
