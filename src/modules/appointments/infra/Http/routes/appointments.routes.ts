import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/Http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentsControler = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsControler.create);
appointmentsRouter.get('/me', providerAppointmentsController.index);

export default appointmentsRouter;
