

function MusicRecords({avt,nameE,year,genre}){
     return (
        <div style={{boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>
            <h2>{nameE}</h2>
             <img src={avt}  alt="abc" />
             <h3>{genre}</h3>
             <h3>{year}</h3>
        </div>
     )
}

export default MusicRecords
//box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;