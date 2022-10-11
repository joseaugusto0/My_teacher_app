## Using custom hooks in the frontend
We will create custom hooks to handle some functions. We will create a folder to handle the hooks
- In src/hooks/pages/useIndex.ts (react says that all hooks need to have 'use' in the init of the name)
```ts
    export function useIndex() {
    const [teachersList, setTeachersList] = useState<Teacher[]>([
        {
          id: 1,
          name: "Professor Zezão 1",
          photo: "https://github.com/joseaugusto0.png",
          description: "Descrição do Zezão 1",
          hour_value: 51
        },
        ....
      ])

    return {
        teachersList,
        
    }
}
``` 
- And we will call this state in index.tsx
```tsx
    const Home: NextPage = () => {
        const {teachersList} = useIndex()

        return (
            <Box sx={{backgroundColor: 'secondary.main'}}>
            <List teachers={teachersList}></List>
            </Box>
        );
    }
}
```

## Getting from the API the teachers list
We will use axis to make the HTTP requests. Let's install:
```
    npm install axios
```

- Creating a file to config axios in src/services/ApiService.ts
```ts
    import axios from "axios";

    export const ApiService = axios.create({
        baseURL: 'http://127.0.0.1:8000',
        headers: {
            'Content-type': 'application/json'
        }
    })
```

- Now we get in useIndex.ts to handle the infos
```ts
    export function useIndex() {
        const [teachersList, setTeachersList] = useState<Teacher[]>([])

        useEffect(() => {
            ApiService.get('teachers').then((response) => {
                console.log(response)
                setTeachersList(response.data)
            })
        }, []);

        return {
            teachersList,

        }
    }
```

## Adding a formatter to polish all data coming from API
- Create a new file in src/services/FormatterService.ts
```ts
    export const FormatterService = {
        monetaryValue(value: number): string {
            return value.toLocaleString(
                'pt-BR', 
                {
                    minimumFractionDigits:2, 
                    style: 'currency', 
                    currency: 'BRL'
                })
        }
    }
```
- And we call this formatter in List.tsx
```tsx
    ....
    <Value>{FormatterService.monetaryValue(teacher.hour_value)} por hora</Value>
    ...
```