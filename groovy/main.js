const url="https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6"
fetch(url,{
    method:'GET',
  headers:{
      'Content-Type':'application/json',
      'Authorization':'Bearer BQB4UNP2B1mjyi36IAoMTyMOy8YCG5YV9MjK0EU2EfMftcwe3vi0XA6i_XOnvzyeNVbd5tialRtaYZYI6IZEsDQ_v_jDk6V1e5OX2r8JAUpZjnl7YVT_PXrzSNSBkF2gsZhzDcqa3ZPgCZs1qD9yX7MjOUNAebL0axVCYhVgfQU'
  }
})

.then(resp=>resp.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))