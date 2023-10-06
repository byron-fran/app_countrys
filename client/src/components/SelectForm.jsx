/* eslint-disable react/prop-types */
import { Fragment } from "react";
import '../styles/formModal.css';


const SelectForm = ({ formModal,
    setFormModal,
    infoActivity,
    setInfoActivity,
    acivityExist,
    handlerSendInfo,
    alerta,
    exito,
    selectAlerta,
    arrayCodeCountries,
    hanlderSelectValue,
    setBottoFloat,
    bottonVisble

}) => {
    const handleClearForm = () => {
        setBottoFloat(true);
        setFormModal(false);
        setInfoActivity({
            ...infoActivity,
            name : '',
            difficulty : '',
            duration : '',
            season: '',
            countryId :[],
            id : ''
        })
    }
    return (
        <>
            <div className='modal' style={{ display: formModal ? 'block' : 'none' }}>

                <div className='form_modal'>
                    <button className='btn_modal' onClick={handleClearForm}>X</button>
                    <form className="form_container" onSubmit={handlerSendInfo} >
                        {exito && (<p className="success">{acivityExist ? 'Se Actualizo correctamente' : 'Se agregó nueva activiada con exito'}</p>)}
                        <div>
                            {alerta.name && (<p className="alerta">{alerta.name}</p>)}
                            <label htmlFor="nombre">Nombre de la actividad</label>
                            <input type="text" id="nombre" placeholder="Ej. Escalar el imalaya"
                                value={infoActivity.name}
                                onChange={e => setInfoActivity({ ...infoActivity, name: e.target.value })}
                            />
                        </div>
                        <div>
                            {alerta.difficulty && (<p className="alerta">{alerta.difficulty}</p>)}
                            <label htmlFor="dificultad">Dificultad</label>
                            <input type="text" id="dificultad" placeholder="Ej. 1-5"
                                value={infoActivity.difficulty}
                                onChange={e => setInfoActivity({ ...infoActivity, difficulty: e.target.value })}
                            />
                        </div>
                        <div>
                            {alerta.duration && (<p className="alerta">{alerta.duration}</p>)}
                            <label htmlFor="duracion">Duracion</label>
                            <input type="text" id="duracion" placeholder="Ej. 5, max-24"
                                value={infoActivity.duration}
                                onChange={e => setInfoActivity({ ...infoActivity, duration: e.target.value })} />

                        </div>

                        <div className="div_select">
                            {alerta.season && (<p className="alerta">{alerta.season}</p>)}
                            <label htmlFor="season">Temporada</label>
                            <select name="season" id="season"
                                value={infoActivity.season}
                                onChange={e => setInfoActivity({ ...infoActivity, season: e.target.value })}>
                                <option value="">--selecciona la Temporada--</option>
                                <option value="Winter">Winter</option>
                                <option value="sumner">sumner</option>
                                <option value="Spring">Spring</option>
                                <option value="Autumn">Autumn</option>

                            </select>
                        </div>
                        <div className="div_select">
                            {alerta.countryId && (<p className="alerta">{alerta.countryId}</p>)}
                            {selectAlerta && (<p className="alerta">Selecciona un pais valido</p>)}
                            <label name="country" id="country" htmlFor="">Selecciona un pais</label>
                            <select id="country" onChange={hanlderSelectValue}>
                                <option value=''>--selecciona un pais--</option>
                                {arrayCodeCountries.length > 0 && arrayCodeCountries.map(country => (
                                    <Fragment key={country.id}>
                                        <option id="country" value={country.id}  >{country.name}</option>
                                    </Fragment>

                                ))}

                            </select>
                        </div>
                        <div>
                            {bottonVisble && (
                                <button className="btn_add" type="submit">{acivityExist ? 'Actualizar actividad' : 'Agregar Nueva Actividad '}</button>
                            )}
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SelectForm