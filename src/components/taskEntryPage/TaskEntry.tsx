import React from "react";
import Task from "./Task"
import {PrimaryButton, TextField, Dropdown, IDropdownOption} from '@fluentui/react/lib';
import {Link} from "react-router-dom";
import NavigationBar from "../header/NavigationBar";

const tables: IDropdownOption[] = [
    {key: "Tasks", text: "Tasks"},];
const table = 'Tasks';


const TaskEntry = () => {
    const [text, setText] = React.useState("");
    const [list, setList] = React.useState<string[]>([]);
    const input = `http://localhost:2222/create?taskName=${text}&table=${table}`;

    React.useEffect(() => {
        setText("");
    }, [list]);
    return (
        <>
            <div>
                <NavigationBar/>
            </div>
            <div style={{
                height: 200,
                justifyContent: "center",
                alignItems: "center",
                display: "flex"}}>
                <TextField
                    type="text"
                    placeholder="Enter Task"
                    value={text}
                    onChange={(event) => {
                    setText(event.currentTarget.value)
                }}/>

                <Dropdown
                    placeholder={"Task Category"}
                    options={tables}
                />

                <PrimaryButton
                    onClick={async () => {
                        var myHeaders = new Headers();

                        myHeaders.append('Access-Control-Allow-Origin','http://localhost:3000',);
                        myHeaders.append('Origin','http://localhost:3000',);
                        myHeaders.append('x-requested-with','XmlHttpRequest',);


                        fetch(input,{
                            method: "POST",
                            headers: myHeaders
                        })
                            .then((response) => {
                                return (response);
                            })
                        }}
                >Create!
                </PrimaryButton>
                <div>
                    <div>

                        <Task taskName={text}/>
                    </div>

            </div>
            </div>
        </>
    );
};

export default TaskEntry;