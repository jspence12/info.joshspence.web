bucket="info.joshspence.web";
totalSteps=3

currentStep=1
echo "STEP $currentStep/$totalSteps: Building application"
npm run build
if [ $? -ne 0 ]
then
    echo "Application build failed. Exiting."
    exit 1
fi

((currentStep++))
echo "STEP $currentStep/$totalSteps: Configure S3 Bucket"
aws s3api head-bucket --bucket $bucket  # returns 0 if bucket exists and is accessible
if [ $? -eq -0 ]
then
    echo "Bucket already exists. Skipping Bucket Creation"
else
    echo "Creating Bucket"
    aws s3api create-bucket --bucket $bucket --region us-east-1 --object-ownership BucketOwnerPreferred

    echo "Setting Up Bucket Access"
    aws s3 website $bucket --index-document index.html &&
    aws s3api delete-public-access-block --bucket $bucket &&
    aws s3api put-bucket-policy --bucket $bucket --policy file://policy.json
    if [ $? -ne 0 ]
    then
        echo "Configure S3 Bucket Failed. Exiting"
        exit 1
    fi
fi

((currentStep++))
echo "STEP $currentStep/$totalSteps: Copying files"
aws s3 sync ../out s3://info.joshspence.web
if [ $? -ne 0 ]
then
    echo File Copy failed. Exiting.
    exit 1
fi

echo "Deployment Successful"
exit 0