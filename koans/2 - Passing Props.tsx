
/*
    TASK: For this Koan you need to add two properties (profileName and profileImage) to the Avatar and Profile component
    to be used as the src and alt for the img. Also the profileName should be displayed in the Profile component
*/

const Avatar = () => {
    return (
        <img
            src=""
            alt=""
            width={200}
            height={200}
        />
    );
}

const Profile = () => {
    return <div>
        <h3>TODO!</h3>
        <Avatar />
    </div>
}

export default Profile;
