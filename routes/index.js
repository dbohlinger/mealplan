// /// All the middelware goes here 
// var Campground= require("../models/mealplan");
// var Comment= require("../models/comment");
// var middelwareObj ={};

// middelwareObj.checkCampgroundOwnership = function(req, res,next){
    
//     if(req.isAuthenticated()){
//             Campground.findById(req.params.id, function(err, foundCampground){
//          if(err || !foundCampground){
//              req.flash("error", "Campground 404");
//           res.redirect("/campgrounds");
//          }else{ 
//              //does the user own the campground 
//              if(foundCampground.author.id.equals(req.user._id)) {
//                  next();
//              } else{
//                   req.flash("error", " You shall not pass!");
//                  res.redirect("back");
//              }
//         }   
//     });
//     }else{
//         req.flash("error", "You need to be logged in to do that!")
//         res.redirect("back");
//     }
// }



// middelwareObj.checkCommentOwnership= function checkCommentOwnership(req, res,next){

//     if(req.isAuthenticated()){
//             Comment.findById(req.params.comment_id, function(err, foundComment){
//          if(err || !foundComment){
//              req.flash("error", "Comment not found");
//             res.redirect("back");
//          }else{ 
//              //does the user own the campground 
//              if(foundComment.author.id.equals(req.user._id)) {
//                  next();
//              } else{
//                   req.flash("error", "You do not have permission to do that!");
//                  res.redirect("back");
//              }
//         }   
//     });
//     }else{
//          req.flash("error", "You need to be logged in to do that");
//         res.redirect("back");
//     }
// };
// middelwareObj.isLoggedIn = function (req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     req.flash("error", "You need to be logged in to do that");
//     res.redirect("/login");
// }


// module.exports=middelwareObj

