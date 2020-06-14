import { Router } from 'express';
import appointmentsRouter from '@modules/appointments/infra/Http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/Http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/Http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
export default routes;
