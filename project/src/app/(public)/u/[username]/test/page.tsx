
type Params = {
    username: string
}

interface Props {
    params: Promise<Params>
}

export default async function TestPage({params}: Props) {
    const {username} = await params;

    return (
        <div>
            Profile @{username}
        </div>
    );

}