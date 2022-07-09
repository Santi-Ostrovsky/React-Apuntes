/*
FORMULARIOS

Los elementos <form> en HTML se manejan de manera distinta a los elementos del DOM en React, porque los elementos <form> naturalmente mantienen un estado interno. Por ejemplo:
*/
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>;
/*
Este formulario, que toma solamente un nombre, tiene el comportamiento normal de un formulario HTML de ingresar a una nueva página cuando se envían los datos del formulario.

Si se quiere lograr el mismo comportamiento en React, funciona, pero en la mayoría de los casos es más conveniente usar una función de JavaScript, que maneje el envío del formulario y tenga acceso a los datos ingresados por el usuario. La manera más convencional de lograr esto, es con la técnica de los 'Componentes Controlados'.

--------------------------------------------------------------------
*/
