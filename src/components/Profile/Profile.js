import './Profile.scss'

function Profile(){
    return (
        <div className="profile">
            <div className="profile-img">
                <img src="https://github.com/Viinii3.png" alt="imagen do perfil do insta"></img>
            </div>
            <div className="profile-details">
                <h2>Marcos Vinicius</h2>
                <div className="profile-subDetails">
                    <p className="subDetail1">Viinii3</p>
                    <p className="subDetail2">Desenvolvedor Font-End</p>
                </div>
            </div>
        </div>

    )
}

export default Profile