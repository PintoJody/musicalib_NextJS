import dbConnect from '../../../utils/dbConnect';
import Song from '../../../models/Song';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    }  = req;

    switch(method){
        case 'GET':
            try{
                const song = await Song.findById(id);

                if(!song){
                    return res.status(400).json({success: false});
                }

                res.status(200).json({success: true, data: song});
            } catch (error){
                res.status(400).json({success: false});
            }
            break;
        case 'PUT':
            try{
                const song = await Song.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if(!song){
                    return res.status(400).json({success: false});
                }

                res.status(200).json({success: true, data: song});

            }catch(error){
                return res.status(400).json({success: false});
            }
            break;
        case 'DELETE':
            try{

                const deletedSong = await Song.deleteOne({ _id: id });

                if(!deletedSong){
                    return res.status(400).json({success: false })
                }

                res.status(200).json({success: true, data: {} });

            }catch (error){
                return res.status(400).json({success: false })
            }
            break;

            default:
                return res.status(400).json({success: false })
                break;
    }
}