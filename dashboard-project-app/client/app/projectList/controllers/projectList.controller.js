'use strict';

angular.module('dashboardProjectApp').controller('projectListCtrl', function(
    $scope,
    UserStory
){
    var data = [];
    var lastUpdate;
    function getFiles() {
        UserStory.find(
        function success(userStories, fillTable) {
            new Promise(function(resolve, reject) {
                var stringDate, realDate;

                
                userStories.forEach(function each (story) {

                    console.log('userStories', story);
                    if(story.lastUpdate !== '') {
                        lastUpdate = moment(story.lastUpdate, "YYYY-MM-DD").format("MM-DD-YYYY");
                    } else {
                        lastUpdate = moment(story.dateCreated, "DD-MM-YYYY").format("MM-DD-YYYY");
                    }
                    data.push(
                        {
                            userStory: story.id+'-'+story.userStory,
                            dateCreated: moment(story.dateCreated, "DD-MM-YYYY").format("MM-DD-YYYY"),
                            lastUpdate: lastUpdate,
                            progressPercentage: story.completed.percentage,
                            progressLabel: story.completed.completed + ' / ' + story.completed.total
                        }
                    )

                    console.log('data', data);
                    resolve(data);
                });
            })
            .then(function(result) {
                $(function () {
                    $('#table').bootstrapTable({
                        data: data
                    });
                });
            });
        });
    };
    getFiles();
});
