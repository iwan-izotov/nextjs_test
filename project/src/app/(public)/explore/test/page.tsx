
type Params = {tag?: string}

interface Props {
    searchParams: Promise<Params>
}

export default async function TestPage({searchParams} : Props) {

    const {tag} = await searchParams;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Explore {!!tag && `by ${tag}`}
            </h1>
        </div>
    );
}