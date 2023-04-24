import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsCalendar2Week, BsClock } from "react-icons/bs";

import "./Reservation.css";

const Reservation = ({ toggle, setToggle }) => {

  const closeModal = () => {
    setToggle(false);
  }

  return (
    <div className="app__reservation">
      <Transition appear show={toggle} as={Fragment}>
        <Dialog as="div" className="app__reservation_dialog" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="app__reservation_transition-child" />
          </Transition.Child>

          <div className="app__reservation_dialog-div1">
            <div className="app__reservation_dialog-div2">

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="app__reservation_dialog-panel">

                  <Dialog.Title as="h1" className="app__reservation_dialog-title">
                    Reserve Your Table
                  </Dialog.Title>

                  <div className="app__reservation_dialog-div3">
                    <label htmlFor="name">Name</label>

                    <div className="app__reservation_dialog-inputDiv">
                      <input type="text" id="name" placeholder="First" />
                      <input type="text" id="name" style={{marginBottom: "0"}} placeholder="Last" />
                    </div>

                    <div className="app__reservation_dialog-label-input">
                      <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="example@email.com" />
                      </div>
                      <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" placeholder="### ### ####" />
                      </div>
                    </div>

                    <div className="app__reservation_dialog-label-input">
                      <div>
                        <label htmlFor="resDate">Reservation Date</label>
                        <div className="app__reservation_dialog-inputDiv-icon">
                          <input type="text" id="resDate" placeholder="MM/DD/YYYY" />
                          <BsCalendar2Week />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="resDate">Reservation Time</label>
                        <div className="app__reservation_dialog-inputDiv-icon">
                          <input type="text" id="resTime" placeholder="HH:MM AM" />
                          <BsClock />
                        </div>
                      </div>
                    </div>

                    <label htmlFor="guests">Number of Guests</label>
                    <input type="text" id="guests" placeholder="#" style={{width: "60%", marginBottom: "0.5rem"}} />

                    <label htmlFor="notes">Notes</label>
                    <textarea name="notes" className="app__reservation_dialog-textarea" placeholder="Any special needs or requirements." />

                    <div className="app__reservation_dialog-buttons">
                      <button type="button" className="app__reservation_dialog-cancelBtn" onClick={closeModal}>Cancel</button>
                      <button type="button" className="app__reservation_dialog-sendBtn">Send</button>
                    </div>

                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>

        </Dialog>
      </Transition>
    </div>
  )
}

export default Reservation;