
/*
    TASK: For this Koan we need make the img round (border radius = 50%) and give it a margin of 20px,
    except this time using the SCSS file
*/

const Avatar = ({profileName, profileImage}) => {
    return (
        <img
            src={profileImage}
            alt={profileName}
            width={200}
            height={200}
        />
    );
}

const Profile = ({profileName, profileImage}) => {
    return <div>
        <h3>{profileName}</h3>
        <Avatar profileName={profileName} profileImage={profileImage} />
    </div>
}

export default Profile;
