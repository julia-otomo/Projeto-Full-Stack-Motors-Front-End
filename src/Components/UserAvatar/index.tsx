import { Avatar } from "@mui/material";

type TUserAvatarProps = {
    img?: string;
    username: string;
};

const UserAvatar = ({ img, username }: TUserAvatarProps) => {
    const stringToColor = (string: string) => {
        let hash = 0;
        let i;

        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = "#";

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }

        return color;
    };

    const stringAvatar = (name: string) => {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
        };
    };
    return <Avatar src={img} {...stringAvatar(username)} />;
};

export default UserAvatar;
