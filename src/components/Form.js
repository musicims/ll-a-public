import React, { useContext } from 'react';
import { Context as TaskContext } from '../context/TaskContext';
import ProgressBar from './ProgressBar';
import { SectionContainerStyled, SectionsContainerStyled, FormContainerStyled, FormNavContainerStyled } from '../styles/Form';
import { ButtonStyled, PrimaryButtonStyled } from '../styles/Button';
import Input from './Input';


function Form(props) {
    const {postTaskData, incrementStep, decrementStep, resetResponse, updateLoading} = useContext(TaskContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        resetResponse(props.tab.id)
        const elem = document.getElementById("response");
        updateLoading(props.tab.id, true)
        elem.scrollIntoView();
        await postTaskData(props.tab)
        updateLoading(props.tab.id, false)
        elem.scrollIntoView();
    }

    const createInputs = () => {
        return Object.keys(props.tab.inputs)[props.tab.step] in props.tab.inputs?
        <SectionContainerStyled>
            {
                
                    Object.keys(props.tab.inputs[Object.keys(props.tab.inputs)[props.tab.step]]).map((inputName) => (
                        <Input 
                            key={inputName} 
                            input={props.tab.inputs[Object.keys(props.tab.inputs)[props.tab.step]][inputName]} 
                            tab={props.tab.id} 
                            section={Object.keys(props.tab.inputs)[props.tab.step]}
                            name={inputName}
                        />
                    ))
                
            }
        </SectionContainerStyled>:
        <></>  
    }

    return (
        <FormContainerStyled>
            {
                Object.keys(props.tab.inputs).length>1?<ProgressBar steps={Object.keys(props.tab.inputs)} step={props.tab.step}/>:<></> 
            }
            <form>
                <SectionsContainerStyled>
                    {createInputs()}
                </SectionsContainerStyled>
                {
                    props.tab.step === Object.keys(props.tab.inputs).length-1?
                    <FormNavContainerStyled>
                        {
                            Object.keys(props.tab.inputs).length > 1?
                            <ButtonStyled onClick={() => decrementStep(props.tab.id, props.tab.step)}>Back</ButtonStyled>:
                            <></>
                        }
                        
                        <PrimaryButtonStyled onClick={handleSubmit} id={props.tab.shortName}>{props.tab.submitMessage}</PrimaryButtonStyled>
                    </FormNavContainerStyled>:
                    <FormNavContainerStyled>
                        {
                            props.tab.step>0?
                            <ButtonStyled onClick={() => decrementStep(props.tab.id, props.tab.step)}>Back</ButtonStyled>:
                            <></> 
                        }
                        <PrimaryButtonStyled onClick={() => incrementStep(props.tab.id, props.tab.step)}>Next</PrimaryButtonStyled>
                    </FormNavContainerStyled>
                    
                }
            </form>
        </FormContainerStyled>
    );
}

export default Form