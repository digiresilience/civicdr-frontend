'use strict';

import clonedeep from 'lodash.clonedeep';

import {
  GET_TICKET_SINGLE,
  UPDATE_TICKET_SP,
  REMOVE_TICKET_SP,
  REMOVE_TICKET_GROUPING
} from '../actions';

export const initialState = {
  ticket: {}
};

export default (state = initialState, action) => {
  const newState = clonedeep(state);
  switch (action.type) {
    case GET_TICKET_SINGLE:
      newState.ticket = Object.assign(newState.ticket, action.data);
      break;
    case UPDATE_TICKET_SP:
      newState.ticket.sp_assigned_id = action.data.sp_assigned_id;
      newState.ticket.ticket_sp_contact = action.data.ticket_sp_contact;
      newState.ticket.ticket_sp_name = action.data.ticket_sp_name;
      break;
    case REMOVE_TICKET_SP:
      newState.ticket.sp_assigned_id = null;
      newState.ticket.ticket_sp_contact = null;
      newState.ticket.ticket_sp_name = null;
      break;
    case REMOVE_TICKET_GROUPING:
      newState.ticket.groupings = newState.ticket.groupings
        .filter(g => g.grouping_id !== action.data.groupingID);
      break;
  }
  return newState;
};
