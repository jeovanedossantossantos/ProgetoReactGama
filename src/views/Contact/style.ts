import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    .form-wrap{
        display: grid;

        .card{
            background-color: red;
            padding: 10px;
            border-radius: 22px;

            form{
                display: grid;

                input{
                    margin:  10px 0 0;
                }

            }
        }
    }
`