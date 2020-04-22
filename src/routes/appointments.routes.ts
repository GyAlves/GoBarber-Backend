import { Router } from 'express';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;
  const appointment = {
    provider,
    date,
  };

  appointments.push(appointment);
  return response.json(appointment);
});

export default appointmentsRouter;
