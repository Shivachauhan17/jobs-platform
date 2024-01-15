import Swal from 'sweetalert2'


export const handleError=(err)=>{
    Swal.fire({
      icon: 'warning',
      title: 'Error',
      text: err,
      showCancelButton: true,
      confirmButtonText: 'Ok',
    //   cancelButtonText: 'Cancel',
    // }).then(async(result) => {
    //   // Check if the user confirmed the logout
    //   if (result.isConfirmed) {
    //      let response=await fetch('https://friends-loop.onrender.com/logout');
    //      console.log(response)
    //      response=await response.json();
         
    //      navigate('/');
          
    //   }
    // })
    // .catch((error)=>{
    //   console.log(error)
    })

    }