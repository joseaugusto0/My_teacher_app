## Creating a box to digit Email and name 
We will use a component that already exists in mui components. In index.tsx
```tsx
    return (
        <>
        <Box sx={{backgroundColor: 'secondary.main'}}>
            <List teachers={teachersList}></List>
        </Box>

        <Dialog open={true} fullWidth PaperProps={{sx:{p: 5}}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    Teste
                </Grid>

                <Grid item>
                    Teste
                </Grid>
            </Grid>

            <DialogActions sx={{mt: 5}}>
                <Button>Cancelar</Button>
                <Button>Marcar</Button>
            </DialogActions>
        </Dialog>

        </>
    );
```
full width will expand horizontally the dialogBox
PaperProps will enable to add styles to the dialog
spacing={2} -> Will make a 16px spacing between the childrens 
p: 5 -> Padding 
Grid has 12 separations horizontally, so if we say xs={12}, we are saying to the component get all row

## Passing the dialogBox values to useIndex file
We will create two more states in useIndex.ts
```ts
    export function useIndex() {
        const [teachersList, setTeachersList] = useState<Teacher[]>([])
        const [name, setName] = useState<string>('')
        const [email, setEmail] = useState<string>('')

        ....
        return {
            teachersList,
            name,setName,
            email,setEmail
        }
    }
```
- And we will import this in our index.tsx
```tsx
    ....
    const {teachersList, name, setName, email, setEmail} = useIndex()
    ....
    <Grid item xs={12}>
        <TextField 
            fullWidth 
            label="Digite o nome" 
            type='text' 
            onChange={(e) => setName(e.target.value)}/>
    </Grid>
    ...
```

## Defining the select teacher
When we click in BookClass, we need to store which teacher was selected
- Creating the new state in useIndex
```ts
    const [selectedTeacher, setSelectedTeacher] = useState<null | Teacher>(null)
```
- Getting in index.tsx and sending the set function as a parameter to List component. So in index.tsx
```tsx
    <List 
        teachers={teachersList}
        onSelect={(teacher) => setSelectedTeacher(teacher)}
    ></List>
``` 
And in List.tsx
```tsx
    interface PropsList {
        teachers: Teacher[],
        onSelect: (teacher:Teacher) => void
    }
    ...
    <Button 
        sx={{width: '70%'}} 
        onClick={() => props.onSelect(teacher)}
    >Book Class with {teacher.name}</Button>
```

## Opening/Closing dialog box
Taking advantage of the created state selectedTeacher, if is different from null, the dialog box needs to open. And if the cancel button is pressed, we put null in the variable So in index.tsx
```tsx
    <Dialog open={selectedTeacher !== null} fullWidth PaperProps={{sx:{p: 5}}}>
    ...
    <Button onClick={() => setSelectedTeacher(null)}>Cancel</Button>
```
If we click outside the dialog box, we want to close him too. So we will use a function in Dialog component:
```tsx
    <Dialog 
        open={selectedTeacher !== null} 
        fullWidth 
        PaperProps={{sx:{p: 5}}}
        onClose={() => setSelectedTeacher(null)}
    >
```

## Send the booking solicitation 
- In useIndex.ts
```ts
    function bookClass(){
        if (selectedTeacher !== null){
            if (validateClassData()){
                ApiService.post(
                    'teachers/' + selectedTeacher.id + '/classes',
                    {
                        name, email
                    }
                    ).then(() => {
                        setSelectedTeacher(null);
                        alert("Class Booked!")
                    }).catch((error) => {
                        alert(error.response?.data.message)
                    })
            }
        }
    }

    function validateClassData(){
        return name.length>0 && email.length>0
    }
```
If the POST request goes successfully, will set the var to null and alert. But if not, will alert the error
**Tip**: error.response? -> This ? is to say to get .data.message just if response has some value

## Using snackbar to say if the booking was successfully registered
Snackbar is a bar that appears in the bottom of the page when something happens. In our case, if a booking was registered or not.
- We will create a state just to handle this message in useIndex.ts
```ts
    const [message, setMessage] = useState<string>('')

    ...
    ).then(() => {
        setSelectedTeacher(null);
        setMessage("Class Booked!")
    }).catch((error) => {
        setMessage(error.response?.data.message)
    })
```
- And use this var in index.tsx to enable or not the SnackBar in index.tsx
```tsx
    <Snackbar 
        message={message}
        open={message.length>0}
        autoHideDuration={2500}
        onClose={()=> setMessage('')}
      />
```
autoHideDuration -> Will close the snackbar after 2500ms
onClose -> We need to put that, because if has message, will always open again the snackbar. So to prevent this, we will set message var as ''

## Clear the Formulary
When we select different teachers, we need that the name and email functions reset to null values. So in useIndex.ts

```ts
    ...
    useEffect(() => {
        clearForm()
    }, [selectedTeacher])
```
The value passed in the array for useEffect will say to the hook looks the variable, and if changes, make the function that we set