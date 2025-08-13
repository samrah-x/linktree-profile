import profile from '../images/profile.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
    return (
      <div className='profile'> 
        <img
          src={profile}
          alt="image"
          className="rounded-circle mx-auto d-block"
          width={150}
          height={150}
          style={{ objectFit: 'cover' }}
        /> 
        <br></br>       
        <h3>Samrah Mumtaz</h3>
        <p>Connect with me.</p>

    </div>
)
}

export default Profile;
