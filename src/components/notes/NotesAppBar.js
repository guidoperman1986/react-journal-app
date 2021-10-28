import moment from 'moment';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes);

    const date = moment().format('MMMM Do YYYY')

    const handleSave = () => {
        dispatch(startSaveNote(active))
    }

    const handlePictureUpload = () => {
        document.querySelector('#fileSelector').click();



    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file){
            dispatch( startUploading(file) );
        }
    }


    return (
        <div className="notes__appbar">
            <span>{ date }</span>

            <input 
                id='fileSelector'
                type="file"
                name="file"
                style={{display:'none'}}
                onChange={handleFileChange}
            />
            <div>
                <button 
                    className="btn"
                    onClick={handlePictureUpload}
                >
                        Picture
                </button>

                <button 
                    onClick={handleSave}
                    className="btn"
                >
                        Save
                </button>
            </div>
        </div>
    )
}
