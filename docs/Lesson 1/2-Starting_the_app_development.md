## Using materials lib to create some components in the page
We need to install the dependencies
```
    npm i @mui/material@5.10.2 @emotion/react@11.10.0 @emotion/styled@11.10.0
```
Now we need to remove the global.css style part:
```css
    @media (prefers-color-scheme: dark) {
        html {
            color-scheme: dark;
        }
        body {
            color: white;
            background: black;
        }
        }
```
This part of code handle the dark mode of our app

## Creating the header Component
- We will create a folder and a file to the header component: my-app/src/components/Header/Header.tsx
```tsx
    
    const Header = () => {
        return (
            <>
            Oi
            </>
        );
    }

    export default Header
```
After that we just need to import <Header> in index.tsx

## Using styled components
We will make a style to our header component, so we need to create an archive: src/components/Header/Header.style.tsx
```tsx
    import { styled } from "@mui/material";

    export const HeaderContainer = styled('header')`
        color: red;
    `;
```
- And we need to import thisnew styled component in Header.tsx file
```tsx
    const Header = () => {
        return (
            <HeaderContainer>
                TreinaWeb
            </HeaderContainer>
        );
    }
```

## Putting an image in our app
Download the image and put in the folder public/images/photo.xxx
- Creating an styled to the img
```tsx

```

- Putting the img in the component
```tsx
    const Header = () => {
        return (
            <HeaderContainer>
                <Logo src="/images/myteacher.png"></Logo>
            </HeaderContainer>
        );
    }
```

## Stylizing the Header components
```tsx
    export const HeaderContainer = styled('header')` // Here is the HTML tag that we will style
        width: 230px; //Saying that our container needs to has only 230px of width
        margin: 40px auto; //The top and bottom margin will have 40px, and the left-right margins will fill equally, in that case, will force the items to be in the center
        text-align: center // putting all items in the container in the center
    `;

    export const Logo = styled('img')`
        width: 100%; //Sayng that our img will fill all 100% from our container
    `;
```
Hint: install vscode-styled-components extension in VSCode, that will help to develop the styled files

## Putting Header in the _app.tsx file
The header will be in all pages of our app, so we don't need to render always. To avoid this, we will put the header in the _app.tsx, that's the main file of our project
```tsx
    function MyApp({ Component, pageProps }: AppProps) {
        return (
            <>
            <Header></Header>
            <Component {...pageProps} />
            </>
        )
        }
```

## Setting the color theme
- Creating a new folder and file: /src/themes/theme.ts
The theme that we set was give by the TreinaWeb developer
- Applying the theme in our _app.tsx
```tsx
    function MyApp({ Component, pageProps }: AppProps) {
        return (
            <ThemeProvider theme={theme}>
            <Header></Header>
            <Component {...pageProps} />
            </ThemeProvider>
        )
    }
``` 
We use the theme provider library to handle this theme

## Creating the teacher listing
- Creating new files /src/components/List.tsx and List.style.tsx
```tsx
//-----------List.style.tsx--------
export const StyledLists = styled('ul')`
    width: 100%; //Setting the list to fill all width in the page
    max-width: 900px; //Set the max width to our list
    margin: 0 auto; //Aligning in the center the list components
    padding: ${({theme}) => theme.spacing(10, 2, 10, 2)};

    display: grid; //Setting the grid display in our list
    grid-template-columns: 1fr 1fr; //Here we will say that the row in the grid will have 2 fractions, one for each colum
    gap: ${({theme}) => theme.spacing(9)}; //Putting a horizontal space between the items in the list

    // To small devices, seeing two items per row it's difficult. Looking that, we need to add a conditional to this devices
    ${({theme}) => theme.breakpoints.down('md')} { //We are adding a breakpoint to devices below (down) medium devices (md) only
        grid-template-columns: 1fr; //To md devices, just one item per row
        gap: ${({theme}) => theme.spacing(8)}; //The vertical spacing between the items changes too
    }
`;

export const ListItem = styled('li')`
    list-style: none; //Removing the dot from li
`;

export const Photo = styled('img')`

`;

export const Infos = styled('div')`

`;

export const Name = styled('h3')`
    margin: ${({theme}) => theme.spacing(2, 0, 0, 0)}; //Spacing will give numbers multiple of 8, so the margin we set in this line is 16px 0 0 0
`;

export const Value = styled('p')`
    margin: 0;
    font-weight: bold;
    color: ${({theme}) => theme.palette.primary.main}; //We are getting the primary color in theme.ts file that is applied in all of our project
`;

export const Description = styled('p')`
    word-break: break-word; //Here we will break the description if is too long
`;
```

## Adding a color to the box in the back of the list
In index.tsx we will add a Box that we will customize
```tsx
    const Home: NextPage = () => {
    return (
        <Box sx={{backgroundColor: 'secondary.main'}}>
        <List></List>
        </Box>
    );
    }
```
sx is a parameter to we set a style directly as a prop to the component
secondary.main is the color provide by the theme that we create before

## Creating a interface to say what kind of types and infos the teacher has
- We will create /src/@types/teacher.ts to say what types our teachers will have
```ts
    export interface Teacher {
        id: number;
        nome: string;
        description: string;
        hour_value: number;
        photo: string;
    }
```

- We will create a hardcoded list to our frontend (that will be changed to the API infos) in index.tsx
```tsx
    const teachers: Teacher[] = [
        {
        id: 1,
        name: "Professor Zezão 1",
        photo: "https://github.com/joseaugust0.png",
        description: "Descrição do Zezão 1",
        hour_value: 51
        },
        {
        id: 2,
        name: "Professor Zezão 2",
        photo: "https://github.com/joseaugust0.png",
        description: "Descrição do Zezão 2",
        hour_value: 2
        },
        ....

        <List teachers={teachers}></List> -> Passing the list as a parameter to our list
```

- We need to pass to our List the type too, so in List.tsx
```tsx
    interface PropsList {
        professores: Teacher[],
    }

    const List = (props: PropsList) => {
        ...
```

## Transforming a list of values in JSX components
In List.tsx
```tsx
    const List = (props: PropsList) => {
    return (
        <div>
            <StyledLists>
                {props.teachers.map((teacher) => (
                    <ListItem key={teacher.id}>
                        <Photo src={teacher.photo}/>
                        <Infos>
                            <Name>{teacher.name}</Name>
                            <Value>{teacher.hour_value.toLocaleString('pt-BR', {minimumFractionDigits:2, style: 'currency', currency: 'BRL'})} por hora</Value> Configuring the R$ x,xx pattern
                            <Description>{teacher.description}</Description>
                            <Button sx={{width: '70%'}}>Book Class with Zézão</Button>
                        </Infos>
                    </ListItem>
                ))}

                
            </StyledLists>
    ...
```

## Feedback if doesn't have any teacher registered