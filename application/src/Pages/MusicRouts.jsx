import {Route,Routes} from "react-router-dom"
import MusicRecords from "./MusicRecord"
import Login from "./Login"
import EditMusicRecord from "./EditMusicRec"
import SingleMusicRecord from "./SingleMusicRec"

function MusicRoutes(){
    return (
       <Routes>
                <Route path="/" element={<MusicRecords />} />
                <Route path="/music/:id" element={<SingleMusicRecord />} />
                <Route path="/music/:id/edit" element={<EditMusicRecord />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<h3>Page Not Found</h3>} />
       </Routes>
    )
}

export default MusicRoutes