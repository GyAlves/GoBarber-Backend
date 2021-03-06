import { Router } from 'express';
import appointmentsRouter from '@modules/appointments/infra/Http/routes/appointments.routes';
import providersRouter from '@modules/appointments/infra/Http/routes/providers.routes';
import usersRouter from '@modules/users/infra/Http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/Http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/Http/routes/password.routes';
import profileRouter from '@modules/users/infra/Http/routes/profile.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/providers', providersRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
export default routes;
