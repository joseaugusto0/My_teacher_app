import { useEffect, useState } from "react";
import { Teacher } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";


export function useIndex() {
    const [teachersList, setTeachersList] = useState<Teacher[]>([])
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [selectedTeacher, setSelectedTeacher] = useState<null | Teacher>(null)
    const [message, setMessage] = useState<string>('')

    useEffect(() => {
        ApiService.get('teachers').then((response) => {
            console.log(response)
            setTeachersList(response.data)
        })
    }, []);

    useEffect(() => {
        clearForm()
    }, [selectedTeacher])

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
                    setMessage("Class Booked!")
                }).catch((error) => {
                    setMessage(error.response?.data.message)
                })
            }else{
                setMessage("Please, fill all the fields")
            }
        }
    }

    function validateClassData(){
        return name.length>0 && email.length>0
    }

    function clearForm(){
        setEmail('')
        setName('')
    }



    return {
        teachersList,
        name,setName,
        email,setEmail,
        selectedTeacher, setSelectedTeacher,
        bookClass,
        message, setMessage
    }
}
