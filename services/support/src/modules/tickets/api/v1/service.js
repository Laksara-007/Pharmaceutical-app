import { traced } from '@sliit-foss/functions';
import { createTicketInDB, getAllTickets, getTicketById, updateTicketById } from '../../repository';
import { statuses } from '../../constants';

export const serviceCreateTicket = (ticket, user) => {
  return traced(createTicketInDB)({ ...ticket, user });
};

export const serviceGetTickets = (filters, sorts, page, limit) => {
  return traced(getAllTickets)({ filters, sorts, page, limit });
};

export const serviceGetTicketById = (id) => {
  return traced(getTicketById)(id);
};

export const serviceCloseTicketById = (id) => {
  return traced(updateTicketById)(id, { status: statuses.resolved });
};
