from flask_wtf import FlaskForm
from wtforms.fields import StringField, TextAreaField, IntegerField, BooleanField, SubmitField, DateTimeField, SelectField, DecimalField
from wtforms.validators import DataRequired



class NewRequest(FlaskForm):

    title = StringField('title', validators=[DataRequired()])
    start_time = DateTimeField('start_time', validators=[DataRequired()])
    end_time = DateTimeField('end_time', validators=[DataRequired()])
    details = TextAreaField('details', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    lat = DecimalField('lat')
    lng = DecimalField('lng')
    submit = SubmitField()