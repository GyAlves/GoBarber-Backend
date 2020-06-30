import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dto/ICreateAppointmentDTO';
import IFindAllInMonthFromProviderDTO from '../dto/IFindAllInMonthFromProviderDTO';
import IFindAllInDayFromProviderDTO from '../dto/IFindAllInDayFromProvider';

export default interface IAppointmentsRepository {
  create({ date }: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFromProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: IFindAllInDayFromProviderDTO,
  ): Promise<Appointment[]>;
}
