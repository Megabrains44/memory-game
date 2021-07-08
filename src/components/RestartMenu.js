import '../css/components.css'

export default function RestartMenu(){
    return (
        <div className="RestartMenu">
            <div className="restart_contents">
                <h4 className="restart_text">Would you like to restart?</h4>
                <div className="restart_btn_container">
                    <button className="restart_btn btn_yes">Yes</button>
                    <button className="restart_btn btn_no">No</button>
                </div>
            </div>
        </div>
    )
}