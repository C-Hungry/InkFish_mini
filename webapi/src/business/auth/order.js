import database from '../../framework/database';
import { ObjectId } from 'mongodb';

var path = "/order";
var routes = [
  {
    path: "/create",
    method: "post",
    action: (req, res) => {

      database('order').then(query=>{
        query.insert({
          openid: req.openid,
          region_start: req.body.region_start,
          region_end: req.body.region_end,
          date: req.body.date,
          time: req.body.time,
          stop: req.body.stop,
          name: req.body.name,
          phone: req.body.phone,
          carType: req.body.carType,
          seatCnt: req.body.seatCnt,
          price: req.body.price,
          checked: req.body.checked,
        })
        .then(res1=>{
          res.success("");
        })
      });
    }
  },
  {
    path: "/mine",
    method: "get",
    action: (req, res) => {

      database('order').then(query=>{
        query.find({openid: req.openid}).sort({_id:-1}).skip(parseInt(req.query.skip)).limit(parseInt(req.query.limit)).toArray().then(result => {
          res.success(result);
        });
      });
    }
  },
  {
    path: "/find",
    method: "get",
    action: (req, res) => {

      database('order').then(query=>{
        query.find(req.query.start && req.query.end ? { region_start: req.query.start, region_end: req.query.end } : {}).sort({_id:-1}).skip(parseInt(req.query.skip)).limit(parseInt(req.query.limit)).toArray().then(result => {
          res.success(result);
        });
      });
    }
  },
  
  {
    path: "/booked",
    method: "get",
    action: (req, res) => {

      database('book').then(query=>{

        query.find({openid: req.openid}).toArray().then(result1 => {

          var _ids = [];
          result1.forEach(item=>{
            _ids.push(ObjectId(item.order_id));
          });
          
          database('order').then(query=>{
            query.find({_id: { $in: _ids }}).sort({_id:-1}).skip(parseInt(req.query.skip)).limit(parseInt(req.query.limit)).toArray().then(result => {
              res.success(result);
            });
          });

        });
      });

    }
  },
  {
    path: "/detail",
    method: "get",
    action: (req, res) => {

      database('order').then(query=>{

        query.findById(req.query.id).then(result => {

          if(!result){
            res.error("未找到对应的拼车单！");
            return;
          }

          database('book').then(query=>{

            query.find({ order_id: req.query.id}).toArray().then(result1 => {

              var orderBookedCnt = 0;

              result1.forEach((item)=>{
                orderBookedCnt += item.bookedCnt;
              });

              result.seatLeft = result.seatCnt - orderBookedCnt;

              res.success(result);

            });
          });
        });
      });
    }
  },
  {
    path: "/book",
    method: "post",
    action: (req, res) => {
      
      database('order').then(query=>{

        query.findById(req.body.id).then(result => {

          if(!result){
            res.error("未找到对应的拼车单！");
            return;
          }

          database('book').then(query=>{

            query.find({ order_id: req.body.id}).toArray().then(result1 => {

              var orderBookedCnt = 0;

              result1.forEach((item)=>{
                orderBookedCnt += item.bookedCnt;
              });

              if(result.seatCnt - orderBookedCnt < req.body.cnt){
                res.error("预定失败，剩余座位不足！");
                return;
              }

              database('book').then(query=>{

                query.insert({ order_id: req.body.id, bookedCnt: req.body.cnt, openid: req.openid}).then(result2 => {
                  res.success("预定成功！");
                });
              });

            });
          });

        });
      });
    }
  },
];

export default {
  path, routes
};