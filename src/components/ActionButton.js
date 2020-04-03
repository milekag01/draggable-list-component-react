import React, { Component } from 'react';
// import Icon from '@material-ui/icons';
import { Button ,TextareaAutosize, Card } from '@material-ui/core';

class ActionButton extends Component {

    state = {
        formOpen :false,
        title: "",
        description: ""
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false
        })
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    handleDescChange = (e) => {
        this.setState({
            description: e.target.description
        });
    }

    renderAddButton = () => {
        const {list} = this.props;
        const buttonText = list ? "Add another List" : "Add another Card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div 
            onClick = {this.openForm}
            style={{
                ...styles.openFormButtonGroup,
                opacity: buttonTextOpacity,
                color: buttonTextColor,
                backgroundColor: buttonTextBackground
            }}>
                <p>+ {buttonText}</p>
            </div>
        );
    }

    renderForm = () => {

        const {list} = this.props;
        const placeholder1 = list ? "Enter list title" : "Enter card title";
        const placeholder2="Enter card description";

        const buttonTitle = list ? "Add list" : "Add Card";

        return (

            <div >
                <Card style={{
                    overflow: "visible",
                    minHeight: 80,
                    minWidth: 272,
                    padding: "6px 8px 2px"
                }}
                >
                    <TextareaAutosize 
                        placeholder={placeholder1}
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        style={{
                            resize: "none",
                            width: "100%",
                            outline: "none",
                            border: "none",
                            minHeight: 40,
                            overflow: "hidden",
                            marginBottom: 10
                        }}
                    />
                    
                    <hr/>
                
                    {!list ? (
                        <TextareaAutosize
                            placeholder={placeholder2}
                            // autoFocus
                            value={this.state.description}
                            onChange={this.handleDescChange}
                            style={{
                                resize: "none",
                                width: "100%",
                                outline: "none",
                                border: "none",
                                minHeight: 80,
                                overflow: "hidden",
                                marginBottom: 10
                            }}
                        /> 
            
                    ) : (<div></div>)} 
                
                </Card>
                <div style={styles.formButtonGroup}>

                </div>
                <Button
                    varient="contained"
                    style={{
                        color: "white",
                        backgroundColor: "#5aac44",
                        cursor: "pointer"
                    }}
                >
                    {buttonTitle}
                </Button>

                <Button 
                    varient="contained"
                    style={{
                        color: "white",
                        backgroundColor: "red",
                        marginLeft: 10,
                        cursor: "pointer"
                    }}
                    onClick={this.closeForm}
                > 
                    Close 
                </Button>
            </div>
        )
    }
    
    render() {
        // return this.state.formOpen ? this.renderform() : this.renderAddButton();
        return this.state.formOpen ? this.renderForm() :this.renderAddButton();
    }
}

const styles = {
    openFormButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 4,
        height: 36,
        width: 272,
        padding: 10
    },
    formButtonGroup: {
        marginTop: 10,
        display: "flex",
        alignItems: "center"
    }
}

export default ActionButton;