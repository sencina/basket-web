import React, {useEffect, useState} from 'react'
import LabeledInput from "../labeledInput/LabeledInput";
import TeamLabelSelect from "../teamLabel/TeamLabelSelect";
import {useRequestService} from "../../../service/requestService";
import DateInput from "../dateInput/DateInput";
const CreateMatchModal = ({handleOutsideClick, teams, locations}) => {

    const service = useRequestService()
    const date = new Date()
    date.setHours(date.getHours() + 2)
    const [matchData, setMatchData] = useState({
        localTeamId: teams[0].id,
        visitorTeamId: teams[0].id,
        location: locations[0],
        startDate: date.toISOString(),
    })

    const handleDateChange = (event) => {
        const newDate = new Date(event.target.value).toISOString().slice(0, 10);
        setMatchData({...matchData, startDate: newDate}) ;
    }

    const handleChange = (props) => (event) => {
        setMatchData({...matchData,[props]: event.target.value})
    }

    const handleSubmit = () => {
        console.log(matchData)
        service.addMatch(matchData).then(response => {
            handleOutsideClick()
        })
    }

    return(

        <div id={'create-match-modal'} className="modal" >
            <div id={'create-match-modal-content'} className="modal-content">
                <div className="create-modal-content-title">
                    <h2> Create Match </h2>
                </div>
                <div className={'add-points-modal-input-containers'}>
                    <TeamLabelSelect options={teams} label={'Home'} handleChange={handleChange('localTeamId')} side={'home'}/>
                    <TeamLabelSelect options={teams} label={'Away'} handleChange={handleChange('visitorTeamId')} side={'away'}/>
                    <LabeledInput options={locations} label={'Location'} handleChange={handleChange('location')} side={'location'}/>
                    {/*<DateInput onChange = {handleDateChange}/>*/}
                </div>
                    <div className={'points-modal-button-container'}>
                        <button className={'add-points-button center-button'} onClick={handleOutsideClick}>Cancel</button>
                        <button id={'create-match-button-submit'} className={'add-points-button center-button'} onClick={handleSubmit}>Create Match</button>
                    </div>
            </div>
        </div>
    )
}

export default CreateMatchModal