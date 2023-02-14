import {Service} from 'interfaces/service';
import {ServiceSectionList} from 'interfaces/service-section-list';

export const fromServicesToSectionList = (
  services: Service[],
): ServiceSectionList[] => {
  if (!services.length) {
    return [];
  }

  return services.reduce((list, {type, id, title}) => {
    const existedTypeIndex = list.findIndex(service => service.type === type);

    if (existedTypeIndex !== -1) {
      list[existedTypeIndex].data.push({id, title});
    } else {
      list.push({
        type,
        data: [{id, title}],
      });
    }

    return list;
  }, [] as ServiceSectionList[]);
};
