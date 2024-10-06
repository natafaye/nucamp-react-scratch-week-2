import { useParams } from "react-router-dom"

export default function ChannelDetailsPage() {

    const { channelId } = useParams()

    // TODO: Use that channelId to fetch the channel information for that id

    return (
        <div>I'm the channel details page</div>
    )
}