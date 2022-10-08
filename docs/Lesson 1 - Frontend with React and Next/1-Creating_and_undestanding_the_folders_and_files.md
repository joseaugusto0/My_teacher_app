# Creating a new project
```
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    npx create-next-app --ts
    npm run dev
```
1th command -> Enable scripts executions in Windows
2nd command -> Create de project (will generate the folder and files)
3th command -> Run the project

## Project sctructure
The strucure created was the default that next says to make
- .next folder -> This folder contains cache, server and static files, and we will not change nothing here
- node_modules -> all the project dependencies
- pages -> Folder that contains all pages from the projects (pages and components)
- public -> Folder that contains files that will be public in our app, as images
- styles -> Folder that contains the css files
- eslintrc.json -> Lint defines patterns to the good programming practices
- next-env.d.ts -> Next file that we will not change, just the next
- next.config.js -> Next config file
- tsconfig.json -> File to config the typescript configs
- _app.tsx -> Basefile used in all pages that we will create in the project. 

## Making Hello World in NEXT
Creating a new file in pages folder, as example: contact.tsx
```tsx
    import { NextPage } from "next";

    const home: NextPage = () => {
        return (
            <div>
                Hello World
            </div>
        )
    }

    export default home;
```
When we run localhost:3000/contact, will run the page automatically

## Why use Components?
Components are used to avoid code repetitions, as example: a custom buttom that only change the color that we can re-use repetedly in our code
- Creating a component as a function with parameters
```tsx
    function Button(props) {
        return <a href="#">{props.title}</a>
    }

    const Home: NextPage = () => {
        return (
            <div>
            <Button title={"Click"}></Button>
            </div>
        )
    }
```
At first, we will not say what type props is

# What JSX is
JSX is a extension to JS to handle our interfaces similarly as the HTML development
