import React from 'react';

const UsersTable = (props) => {


    <table>
        <thead>

            <tr>

                <th>Nome</th>
                <th>Username</th>
                <th>Email</th>
                <th>Idade</th>
                <th>Ações</th>

            </tr>
        </thead>


        <tbody>

{

props.users.length > 0 ?(
props.users.map(
    (users) =>(
<tr key={user.id}>

    <td>{user.id}</td>

    <td>{user.name}</td>

    <td>{user.username}</td>

    <td>{user.email}</td>

    <td>{user.age}</td>

    <td>

<button onClick={
    () => props.editRow(user)

}
> 
Editar

</button>

    </td>


    <td> 

        <button 
            onClick={


                () => props.deleterUser(user.id)
            }

        > 
        Deletar
            </button>


            </td>
            </tr>
    )

    )
    ):(


        <tr>

<td colSpan={4}>Lista vazia</td>

        </tr>
    )



}

        </tbody>


    </table>



}


export default UsersTable