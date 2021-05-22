export class TransformService {
    static transformDataToArray(data) {
        return Object.keys(data).map(
            key => {
                data[key]['post-id'] = key
                return data[key] 
            }
        )
    }
}